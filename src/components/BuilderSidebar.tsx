
import { useState, useEffect } from 'react';
import { 
  Heading, 
  Type, 
  Square, 
  Image as ImageIcon, 
  SplitSquareVertical, 
  Minus, 
  Layout, 
  PanelLeft, 
  MessageSquare, 
  Megaphone,
  ChevronDown,
  Trash,
  Copy,
  ArrowUp,
  ArrowDown,
  Save,
  Download
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useBuilder, ElementType } from '@/context/BuilderContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StylesEditor from './StylesEditor';
import { toast } from 'sonner';

interface ElementOption {
  type: ElementType;
  label: { ar: string; en: string };
  icon: React.ReactNode;
}

const BuilderSidebar = () => {
  const { 
    addElement, 
    elements, 
    activeElementId, 
    updateElement, 
    removeElement,
    duplicateElement,
    moveElement,
    clearDesign
  } = useBuilder();
  
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    const htmlLang = document.documentElement.lang;
    setLanguage(htmlLang === 'en' ? 'en' : 'ar');
  }, []);

  const basicElements: ElementOption[] = [
    { type: 'heading', label: { ar: 'عنوان', en: 'Heading' }, icon: <Heading size={18} /> },
    { type: 'paragraph', label: { ar: 'فقرة', en: 'Paragraph' }, icon: <Type size={18} /> },
    { type: 'button', label: { ar: 'زر', en: 'Button' }, icon: <Square size={18} /> },
    { type: 'image', label: { ar: 'صورة', en: 'Image' }, icon: <ImageIcon size={18} /> },
    { type: 'spacer', label: { ar: 'مباعد', en: 'Spacer' }, icon: <SplitSquareVertical size={18} /> },
    { type: 'divider', label: { ar: 'فاصل', en: 'Divider' }, icon: <Minus size={18} /> },
  ];

  const complexElements: ElementOption[] = [
    { type: 'container', label: { ar: 'حاوية', en: 'Container' }, icon: <Layout size={18} /> },
    { type: 'hero', label: { ar: 'القسم الرئيسي', en: 'Hero Section' }, icon: <PanelLeft size={18} /> },
    { type: 'features', label: { ar: 'الميزات', en: 'Features' }, icon: <Layout size={18} /> },
    { type: 'testimonial', label: { ar: 'شهادة', en: 'Testimonial' }, icon: <MessageSquare size={18} /> },
    { type: 'cta', label: { ar: 'دعوة للعمل', en: 'Call to Action' }, icon: <Megaphone size={18} /> },
  ];

  const activeElement = elements.find(el => el.id === activeElementId);

  const handleClearDesign = () => {
    if (window.confirm('هل أنت متأكد من رغبتك في مسح جميع العناصر؟')) {
      clearDesign();
      toast.success('تم مسح جميع العناصر بنجاح');
    }
  };

  const handleExportHTML = () => {
    try {
      // Simple HTML generation for demo
      let html = '<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n';
      html += '  <meta charset="UTF-8">\n';
      html += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
      html += '  <title>الصفحة المصممة</title>\n';
      html += '  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n';
      html += '</head>\n<body class="rtl">\n';
      html += '  <div class="container mx-auto px-4 py-8">\n';
      
      // Add elements
      elements.forEach(el => {
        if (el.type === 'heading') {
          const level = el.props?.level || 'h2';
          const alignment = el.props?.alignment || 'left';
          html += `    <${level} class="font-bold text-${alignment}">${el.content || ''}</${level}>\n`;
        } else if (el.type === 'paragraph') {
          const alignment = el.props?.alignment || 'left';
          html += `    <p class="text-gray-700 text-${alignment}">${el.content || ''}</p>\n`;
        } else if (el.type === 'button') {
          html += `    <button class="px-4 py-2 bg-blue-500 text-white rounded">${el.content || ''}</button>\n`;
        } else if (el.type === 'image') {
          html += `    <img src="${el.props?.src || '/placeholder.svg'}" alt="${el.props?.alt || 'صورة'}" class="max-w-full">\n`;
        } else if (el.type === 'spacer') {
          html += `    <div style="height: ${el.props?.height || 32}px;"></div>\n`;
        } else if (el.type === 'divider') {
          html += `    <hr>\n`;
        }
      });
      
      html += '  </div>\n</body>\n</html>';
      
      // Create download link
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'exported-page.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('تم تصدير الصفحة بنجاح');
    } catch (error) {
      toast.error('حدث خطأ أثناء تصدير الصفحة');
    }
  };

  return (
    <div className="w-full h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">
          {language === 'ar' ? 'منشئ الصفحات' : 'Page Builder'}
        </h2>
      </div>
      
      <Tabs defaultValue="elements" className="flex-1 overflow-hidden flex flex-col">
        <TabsList className="grid grid-cols-2 mx-4 mt-2">
          <TabsTrigger value="elements">
            {language === 'ar' ? 'العناصر' : 'Elements'}
          </TabsTrigger>
          <TabsTrigger value="properties">
            {language === 'ar' ? 'الخصائص' : 'Properties'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="elements" className="flex-1 overflow-y-auto p-4 space-y-6">
          <Accordion type="single" collapsible defaultValue="basic">
            <AccordionItem value="basic">
              <AccordionTrigger className="py-3">
                {language === 'ar' ? 'العناصر الأساسية' : 'Basic Elements'}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {basicElements.map((elem) => (
                    <button
                      key={elem.type}
                      className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                      onClick={() => addElement(elem.type)}
                    >
                      <div className="text-gray-600 mb-2">{elem.icon}</div>
                      <span className="text-xs font-medium">{elem.label[language]}</span>
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="complex">
              <AccordionTrigger className="py-3">
                {language === 'ar' ? 'عناصر متقدمة' : 'Advanced Elements'}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {complexElements.map((elem) => (
                    <button
                      key={elem.type}
                      className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                      onClick={() => addElement(elem.type)}
                    >
                      <div className="text-gray-600 mb-2">{elem.icon}</div>
                      <span className="text-xs font-medium">{elem.label[language]}</span>
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="actions">
              <AccordionTrigger className="py-3">
                {language === 'ar' ? 'إجراءات' : 'Actions'}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    onClick={handleExportHTML}
                  >
                    <Download size={16} className="mr-2" />
                    {language === 'ar' ? 'تصدير كـ HTML' : 'Export as HTML'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-destructive hover:text-destructive" 
                    onClick={handleClearDesign}
                  >
                    <Trash size={16} className="mr-2" />
                    {language === 'ar' ? 'مسح جميع العناصر' : 'Clear All Elements'}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="properties" className="flex-1 overflow-y-auto p-4">
          {activeElement ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">
                  {language === 'ar' ? 'خصائص العنصر' : 'Element Properties'}
                </h3>
                <div className="flex gap-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => duplicateElement(activeElement.id)}
                    className="h-8 px-2"
                  >
                    <Copy size={14} className="mr-1" />
                    {language === 'ar' ? 'نسخ' : 'Copy'}
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => removeElement(activeElement.id)}
                    className="h-8 px-2"
                  >
                    <Trash size={14} className="mr-1" />
                    {language === 'ar' ? 'حذف' : 'Delete'}
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => moveElement(activeElement.id, 'up')}
                  className="flex-1 h-8"
                >
                  <ArrowUp size={14} className="mr-1" />
                  {language === 'ar' ? 'لأعلى' : 'Up'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => moveElement(activeElement.id, 'down')}
                  className="flex-1 h-8"
                >
                  <ArrowDown size={14} className="mr-1" />
                  {language === 'ar' ? 'لأسفل' : 'Down'}
                </Button>
              </div>
              
              {activeElement.type === 'heading' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="heading-text">
                      {language === 'ar' ? 'نص العنوان' : 'Heading Text'}
                    </Label>
                    <Input
                      id="heading-text"
                      value={activeElement.content || ''}
                      onChange={(e) => updateElement(activeElement.id, { content: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="heading-level">
                      {language === 'ar' ? 'مستوى العنوان' : 'Heading Level'}
                    </Label>
                    <Select
                      value={(activeElement.props?.level || 'h2').toString()}
                      onValueChange={(value) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, level: value } 
                        })
                      }
                    >
                      <SelectTrigger id="heading-level">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="h1">H1</SelectItem>
                        <SelectItem value="h2">H2</SelectItem>
                        <SelectItem value="h3">H3</SelectItem>
                        <SelectItem value="h4">H4</SelectItem>
                        <SelectItem value="h5">H5</SelectItem>
                        <SelectItem value="h6">H6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              
              {activeElement.type === 'paragraph' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="paragraph-text">
                      {language === 'ar' ? 'نص الفقرة' : 'Paragraph Text'}
                    </Label>
                    <textarea
                      id="paragraph-text"
                      className="w-full min-h-[100px] p-2 border border-gray-200 rounded-md"
                      value={activeElement.content || ''}
                      onChange={(e) => updateElement(activeElement.id, { content: e.target.value })}
                    />
                  </div>
                </div>
              )}
              
              {activeElement.type === 'button' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="button-text">
                      {language === 'ar' ? 'نص الزر' : 'Button Text'}
                    </Label>
                    <Input
                      id="button-text"
                      value={activeElement.content || ''}
                      onChange={(e) => updateElement(activeElement.id, { content: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="button-variant">
                      {language === 'ar' ? 'نمط الزر' : 'Button Style'}
                    </Label>
                    <Select
                      value={activeElement.props?.variant || 'primary'}
                      onValueChange={(value) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, variant: value } 
                        })
                      }
                    >
                      <SelectTrigger id="button-variant">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">
                          {language === 'ar' ? 'رئيسي' : 'Primary'}
                        </SelectItem>
                        <SelectItem value="secondary">
                          {language === 'ar' ? 'ثانوي' : 'Secondary'}
                        </SelectItem>
                        <SelectItem value="outline">
                          {language === 'ar' ? 'إطار' : 'Outline'}
                        </SelectItem>
                        <SelectItem value="ghost">
                          {language === 'ar' ? 'شبح' : 'Ghost'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="button-size">
                      {language === 'ar' ? 'حجم الزر' : 'Button Size'}
                    </Label>
                    <Select
                      value={activeElement.props?.size || 'default'}
                      onValueChange={(value) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, size: value } 
                        })
                      }
                    >
                      <SelectTrigger id="button-size">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sm">
                          {language === 'ar' ? 'صغير' : 'Small'}
                        </SelectItem>
                        <SelectItem value="default">
                          {language === 'ar' ? 'متوسط' : 'Medium'}
                        </SelectItem>
                        <SelectItem value="lg">
                          {language === 'ar' ? 'كبير' : 'Large'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="button-link">
                      {language === 'ar' ? 'رابط الزر' : 'Button Link'}
                    </Label>
                    <Input
                      id="button-link"
                      value={activeElement.props?.link || ''}
                      onChange={(e) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, link: e.target.value } 
                        })
                      }
                      placeholder="https://"
                    />
                  </div>
                </div>
              )}
              
              {activeElement.type === 'spacer' && (
                <div className="space-y-4">
                  <div>
                    <Label>
                      {language === 'ar' ? 'الارتفاع (بكسل)' : 'Height (px)'}
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[(activeElement.props?.height || 32)]}
                        min={8}
                        max={200}
                        step={4}
                        onValueChange={(value) => 
                          updateElement(activeElement.id, { 
                            props: { ...activeElement.props, height: value[0] } 
                          })
                        }
                      />
                      <span className="w-12 text-center">
                        {activeElement.props?.height || 32}px
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeElement.type === 'divider' && (
                <div className="space-y-4">
                  <div>
                    <Label>
                      {language === 'ar' ? 'سمك الخط' : 'Line Thickness'}
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[(activeElement.props?.thickness || 1)]}
                        min={1}
                        max={8}
                        step={1}
                        onValueChange={(value) => 
                          updateElement(activeElement.id, { 
                            props: { ...activeElement.props, thickness: value[0] } 
                          })
                        }
                      />
                      <span className="w-12 text-center">
                        {activeElement.props?.thickness || 1}px
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="divider-style">
                      {language === 'ar' ? 'نمط الخط' : 'Line Style'}
                    </Label>
                    <Select
                      value={activeElement.props?.lineStyle || 'solid'}
                      onValueChange={(value) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, lineStyle: value } 
                        })
                      }
                    >
                      <SelectTrigger id="divider-style">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solid">
                          {language === 'ar' ? 'مصمت' : 'Solid'}
                        </SelectItem>
                        <SelectItem value="dashed">
                          {language === 'ar' ? 'متقطع' : 'Dashed'}
                        </SelectItem>
                        <SelectItem value="dotted">
                          {language === 'ar' ? 'منقط' : 'Dotted'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              
              {activeElement.type === 'image' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="image-url">
                      {language === 'ar' ? 'رابط الصورة' : 'Image URL'}
                    </Label>
                    <Input
                      id="image-url"
                      value={activeElement.props?.src || ''}
                      onChange={(e) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, src: e.target.value } 
                        })
                      }
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="image-alt">
                      {language === 'ar' ? 'النص البديل' : 'Alt Text'}
                    </Label>
                    <Input
                      id="image-alt"
                      value={activeElement.props?.alt || ''}
                      onChange={(e) => 
                        updateElement(activeElement.id, { 
                          props: { ...activeElement.props, alt: e.target.value } 
                        })
                      }
                      placeholder={language === 'ar' ? 'وصف الصورة' : 'Image description'}
                    />
                  </div>
                </div>
              )}
              
              {/* Add the new StylesEditor component */}
              <StylesEditor />
            </div>
          ) : (
            <div className="text-center p-6 text-gray-500">
              {language === 'ar' 
                ? 'اختر عنصرًا من الصفحة لتعديل خصائصه' 
                : 'Select an element on the page to edit its properties'}
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      <div className="p-4 border-t border-gray-200">
        <Button className="w-full btn-primary" onClick={handleExportHTML}>
          {language === 'ar' ? 'تصدير الصفحة' : 'Export Page'}
        </Button>
      </div>
    </div>
  );
};

export default BuilderSidebar;
