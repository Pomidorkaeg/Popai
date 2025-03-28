import React, { useState } from 'react';
import { Edit2, Shield, ImagePlus, Award, MapPin, Info, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getTeamsData, updateTeam } from '@/utils/teamsData';
import { Team } from '@/types/team';
import { toast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Instagram, Facebook, Twitter } from 'lucide-react';

export default function TeamsManagement() {
  const [teams, setTeams] = useState<Team[]>(getTeamsData());
  const [editingTeamId, setEditingTeamId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Team | null>(null);
  
  const handleEditClick = (team: Team) => {
    setEditingTeamId(team.id);
    setFormData({ ...team });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (formData) {
      if (name.includes('.')) {
        // Handle nested properties (socialLinks)
        const [parent, child] = name.split('.');
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent as keyof Team] as object,
            [child]: value
          }
        });
      } else if (name === 'achievements') {
        // Handle achievements array
        setFormData({
          ...formData,
          achievements: value.split('\n').filter(item => item.trim() !== '')
        });
      } else if (name === 'foundedYear') {
        // Handle numeric foundedYear
        setFormData({
          ...formData,
          foundedYear: parseInt(value) || 0
        });
      } else {
        // Handle regular properties
        setFormData({
          ...formData,
          [name]: value
        });
      }
    }
  };
  
  const handleCancel = () => {
    setEditingTeamId(null);
    setFormData(null);
  };
  
  const handleSave = () => {
    if (formData) {
      try {
        updateTeam(formData);
        setTeams(teams.map(team => team.id === formData.id ? formData : team));
        toast({
          title: "Команда обновлена",
          description: "Информация о команде успешно обновлена",
        });
        setEditingTeamId(null);
        setFormData(null);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Ошибка",
          description: "Не удалось сохранить изменения",
        });
      }
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Управление командами</h2>
      <p>Здесь будет список команд и функции управления ими.</p>
    </div>
  );
}
