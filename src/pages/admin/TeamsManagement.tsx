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

const TeamsManagement = () => {
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
      <Card className="mb-8 bg-gradient-to-br from-white to-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-fc-green" />
            Управление командами
          </CardTitle>
          <CardDescription>
            Настройка информации о командах клуба
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 gap-8">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
            {editingTeamId === team.id && formData ? (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Редактирование команды</h3>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      Отмена
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                      Сохранить
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Название команды</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="shortName">Краткое название</Label>
                      <Input 
                        id="shortName" 
                        name="shortName" 
                        value={formData.shortName} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="logo">URL логотипа</Label>
                      <Input 
                        id="logo" 
                        name="logo" 
                        value={formData.logo} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="backgroundImage">URL фонового изображения</Label>
                      <Input 
                        id="backgroundImage" 
                        name="backgroundImage" 
                        value={formData.backgroundImage} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="primaryColor">Основной цвет</Label>
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-6 h-6 rounded-full border"
                            style={{ backgroundColor: formData.primaryColor }}
                          ></div>
                          <Input 
                            id="primaryColor" 
                            name="primaryColor" 
                            value={formData.primaryColor} 
                            onChange={handleChange} 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="secondaryColor">Дополнительный цвет</Label>
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-6 h-6 rounded-full border"
                            style={{ backgroundColor: formData.secondaryColor }}
                          ></div>
                          <Input 
                            id="secondaryColor" 
                            name="secondaryColor" 
                            value={formData.secondaryColor} 
                            onChange={handleChange} 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Описание</Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="coach">Главный тренер</Label>
                      <Input 
                        id="coach" 
                        name="coach" 
                        value={formData.coach} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="foundedYear">Год основания</Label>
                      <Input 
                        id="foundedYear" 
                        name="foundedYear" 
                        type="number"
                        value={formData.foundedYear} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="stadium">Стадион</Label>
                      <Input 
                        id="stadium" 
                        name="stadium" 
                        value={formData.stadium} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Адрес</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="achievements">Достижения (каждое с новой строки)</Label>
                      <Textarea 
                        id="achievements" 
                        name="achievements" 
                        value={formData.achievements.join('\n')} 
                        onChange={handleChange} 
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-3 border p-4 rounded-md">
                      <Label>Социальные сети</Label>
                      
                      <div>
                        <Label htmlFor="socialLinks.website" className="text-sm">Вебсайт</Label>
                        <Input 
                          id="socialLinks.website" 
                          name="socialLinks.website" 
                          value={formData.socialLinks.website || ''} 
                          onChange={handleChange} 
                          placeholder="https://example.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="socialLinks.instagram" className="text-sm">Instagram</Label>
                        <Input 
                          id="socialLinks.instagram" 
                          name="socialLinks.instagram" 
                          value={formData.socialLinks.instagram || ''} 
                          onChange={handleChange} 
                          placeholder="https://instagram.com/teamname"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="socialLinks.facebook" className="text-sm">Facebook</Label>
                        <Input 
                          id="socialLinks.facebook" 
                          name="socialLinks.facebook" 
                          value={formData.socialLinks.facebook || ''} 
                          onChange={handleChange} 
                          placeholder="https://facebook.com/teamname"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="socialLinks.twitter" className="text-sm">Twitter</Label>
                        <Input 
                          id="socialLinks.twitter" 
                          name="socialLinks.twitter" 
                          value={formData.socialLinks.twitter || ''} 
                          onChange={handleChange} 
                          placeholder="https://twitter.com/teamname"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="h-48 relative">
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      backgroundImage: `url('${team.backgroundImage}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(to right, ${team.primaryColor}DD, ${team.secondaryColor}99)`,
                    }}
                  ></div>
                  <div className="absolute inset-0 p-6 flex items-center">
                    <div className="flex items-center">
                      <img 
                        src={team.logo} 
                        alt={team.name} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="ml-6">
                        <h3 className="text-3xl font-bold text-white drop-shadow-md">
                          {team.name}
                        </h3>
                        <p className="text-white text-opacity-90">
                          Основан в {team.foundedYear} году
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={() => handleEditClick(team)}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Edit2 className="h-4 w-4 mr-1" /> Изменить
                    </Button>
                  </div>
                </div>
                
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <Info className="w-5 h-5 mr-2 text-fc-green" />
                        <h4 className="font-semibold">О команде</h4>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {team.description}
                      </p>
                      
                      <div className="flex items-center mt-6 mb-3">
                        <Star className="w-5 h-5 mr-2 text-fc-green" />
                        <h4 className="font-semibold">Стадион</h4>
                      </div>
                      <p className="text-gray-600">
                        {team.stadium}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <Award className="w-5 h-5 mr-2 text-fc-green" />
                        <h4 className="font-semibold">Достижения</h4>
                      </div>
                      <ul className="space-y-2">
                        {team.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-fc-green mt-2 mr-2"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center mt-6 mb-3">
                        <MapPin className="w-5 h-5 mr-2 text-fc-green" />
                        <h4 className="font-semibold">Адрес</h4>
                      </div>
                      <p className="text-gray-600">
                        {team.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {team.socialLinks.website && (
                        <div className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700 flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          Сайт
                        </div>
                      )}
                      {team.socialLinks.instagram && (
                        <div className="px-3 py-1 bg-gray-600 rounded text-sm text-white flex items-center">
                          <Instagram className="w-4 h-4 mr-1" />
                          Instagram
                        </div>
                      )}
                      {team.socialLinks.facebook && (
                        <div className="px-3 py-1 bg-gray-600 rounded text-sm text-white flex items-center">
                          <Facebook className="w-4 h-4 mr-1" />
                          Facebook
                        </div>
                      )}
                      {team.socialLinks.twitter && (
                        <div className="px-3 py-1 bg-gray-400 rounded text-sm text-white flex items-center">
                          <Twitter className="w-4 h-4 mr-1" />
                          Twitter
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamsManagement;
