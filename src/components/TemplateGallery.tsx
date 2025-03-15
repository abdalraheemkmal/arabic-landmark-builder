
import React from 'react';
import { useBuilder } from '@/context/BuilderContext';
import { toast } from 'sonner';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Template {
  id: string;
  name: string;
  category: string[];
  thumbnail: string;
  elements: any[];
}

const templates: Template[] = [
  {
    id: 'template-1',
    name: 'صفحة هبوط للخدمات',
    category: ['خدمات', 'أعمال'],
    thumbnail: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400',
    elements: [
      { id: 'el-1', type: 'hero', content: 'قدم خدماتك بكفاءة واحترافية', props: { alignment: 'center' } },
      { id: 'el-2', type: 'features', content: 'خدماتنا المميزة', props: { columns: 3 } },
      { id: 'el-3', type: 'cta', content: 'احصل على استشارة مجانية', props: { buttonText: 'تواصل معنا' } }
    ]
  },
  {
    id: 'template-2',
    name: 'منتجات ومتجر إلكتروني',
    category: ['متاجر', 'تسوق'],
    thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400',
    elements: [
      { id: 'el-1', type: 'hero', content: 'أفضل المنتجات بأفضل الأسعار', props: { alignment: 'center' } },
      { id: 'el-2', type: 'features', content: 'منتجاتنا المميزة', props: { columns: 4 } },
      { id: 'el-3', type: 'testimonial', content: 'آراء عملائنا', props: {} }
    ]
  },
  {
    id: 'template-3',
    name: 'صفحة هبوط تعليمية',
    category: ['تعليم', 'كورسات'],
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400',
    elements: [
      { id: 'el-1', type: 'hero', content: 'ابدأ رحلتك التعليمية الآن', props: { alignment: 'center' } },
      { id: 'el-2', type: 'features', content: 'الكورسات المتوفرة', props: { columns: 3 } },
      { id: 'el-3', type: 'cta', content: 'سجل الآن واحصل على خصم 20%', props: { buttonText: 'سجل الآن' } }
    ]
  },
  {
    id: 'template-4',
    name: 'صفحة رئيسية للمطاعم',
    category: ['مطاعم', 'طعام'],
    thumbnail: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400',
    elements: [
      { id: 'el-1', type: 'hero', content: 'أشهى الأطباق بانتظارك', props: { alignment: 'center' } },
      { id: 'el-2', type: 'features', content: 'قائمة الطعام', props: { columns: 2 } },
      { id: 'el-3', type: 'testimonial', content: 'ماذا يقول عملاؤنا', props: {} }
    ]
  },
  {
    id: 'template-5',
    name: 'استشارات ومهنيين',
    category: ['استشارات', 'أعمال'],
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400',
    elements: [
      { id: 'el-1', type: 'hero', content: 'خبراء في مجال الاستشارات', props: { alignment: 'center' } },
      { id: 'el-2', type: 'features', content: 'خدماتنا الاستشارية', props: { columns: 3 } },
      { id: 'el-3', type: 'cta', content: 'احصل على موعد استشاري', props: { buttonText: 'حجز موعد' } }
    ]
  },
  {
    id: 'template-6',
    name: 'صفحة شخصية',
    category: ['شخصي', 'سيرة ذاتية'],
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400',
    elements: [
      { id: 'el-1', type: 'hero', content: 'مرحباً، أنا [اسمك هنا]', props: { alignment: 'center' } },
      { id: 'el-2', type: 'features', content: 'مهاراتي وخبراتي', props: { columns: 2 } },
      { id: 'el-3', type: 'testimonial', content: 'توصيات', props: {} }
    ]
  }
];

const categories = [
  'الكل',
  'خدمات',
  'أعمال',
  'متاجر',
  'تسوق',
  'تعليم',
  'كورسات',
  'مطاعم',
  'طعام',
  'استشارات',
  'شخصي',
  'سيرة ذاتية'
];

const TemplateGallery = () => {
  const { setElements } = useBuilder();
  const [selectedCategory, setSelectedCategory] = React.useState('الكل');
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'الكل' || template.category.includes(selectedCategory);
    const matchesSearch = searchTerm === '' || 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  const applyTemplate = (template: Template) => {
    // Convert template elements to the format expected by the builder
    const builderElements = template.elements.map(el => ({
      ...el,
      id: `element-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    }));
    
    // Confirm before applying template
    if (window.confirm('سيتم استبدال التصميم الحالي بالقالب المختار. هل أنت متأكد؟')) {
      setElements(builderElements);
      toast.success(`تم تطبيق قالب "${template.name}" بنجاح`);
    }
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="p-4 border-b bg-secondary/10">
        <h2 className="text-lg font-semibold mb-4">معرض القوالب الجاهزة</h2>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="البحث عن قوالب..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                />
              </CardContent>
              <CardFooter className="p-4 flex flex-col gap-2">
                <div>
                  <h3 className="font-medium">{template.name}</h3>
                  <div className="flex gap-2 flex-wrap mt-1">
                    {template.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-secondary/20 px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  className="w-full mt-2" 
                  onClick={() => applyTemplate(template)}
                >
                  استخدام هذا القالب
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;
