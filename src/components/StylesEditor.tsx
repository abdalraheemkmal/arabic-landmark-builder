
import React from 'react';
import { useBuilder } from '@/context/BuilderContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';

const StylesEditor = () => {
  const { elements, activeElementId, updateElement } = useBuilder();
  
  const activeElement = elements.find(el => el.id === activeElementId);
  
  if (!activeElement) return null;
  
  const updateElementStyle = (style: string, value: any) => {
    const currentStyles = activeElement.props?.styles || {};
    updateElement(activeElement.id, {
      props: {
        ...activeElement.props,
        styles: {
          ...currentStyles,
          [style]: value
        }
      }
    });
  };
  
  return (
    <div className="p-4 border-t">
      <h3 className="text-sm font-medium mb-3">تنسيق العنصر</h3>
      
      <Tabs defaultValue="text" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="text">النص</TabsTrigger>
          <TabsTrigger value="layout">التخطيط</TabsTrigger>
          <TabsTrigger value="appearance">المظهر</TabsTrigger>
        </TabsList>
        
        <TabsContent value="text" className="space-y-4">
          {(activeElement.type === 'heading' || activeElement.type === 'paragraph' || activeElement.type === 'button') && (
            <>
              <div className="flex items-center justify-between">
                <Label>محاذاة النص</Label>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Toggle 
                    pressed={activeElement.props?.alignment === 'left'}
                    onPressedChange={() => updateElement(activeElement.id, {
                      props: {...activeElement.props, alignment: 'left'}
                    })}
                    size="sm"
                  >
                    <AlignLeft size={16} />
                  </Toggle>
                  <Toggle 
                    pressed={activeElement.props?.alignment === 'center'}
                    onPressedChange={() => updateElement(activeElement.id, {
                      props: {...activeElement.props, alignment: 'center'}
                    })}
                    size="sm"
                  >
                    <AlignCenter size={16} />
                  </Toggle>
                  <Toggle 
                    pressed={activeElement.props?.alignment === 'right'}
                    onPressedChange={() => updateElement(activeElement.id, {
                      props: {...activeElement.props, alignment: 'right'}
                    })}
                    size="sm"
                  >
                    <AlignRight size={16} />
                  </Toggle>
                </div>
              </div>
              
              <div>
                <Label>نمط النص</Label>
                <div className="flex items-center space-x-1 rtl:space-x-reverse mt-2">
                  <Toggle 
                    pressed={activeElement.props?.styles?.fontWeight === 'bold'}
                    onPressedChange={() => updateElementStyle('fontWeight', 
                      activeElement.props?.styles?.fontWeight === 'bold' ? 'normal' : 'bold'
                    )}
                    size="sm"
                  >
                    <Bold size={16} />
                  </Toggle>
                  <Toggle 
                    pressed={activeElement.props?.styles?.fontStyle === 'italic'}
                    onPressedChange={() => updateElementStyle('fontStyle', 
                      activeElement.props?.styles?.fontStyle === 'italic' ? 'normal' : 'italic'
                    )}
                    size="sm"
                  >
                    <Italic size={16} />
                  </Toggle>
                  <Toggle 
                    pressed={activeElement.props?.styles?.textDecoration === 'underline'}
                    onPressedChange={() => updateElementStyle('textDecoration', 
                      activeElement.props?.styles?.textDecoration === 'underline' ? 'none' : 'underline'
                    )}
                    size="sm"
                  >
                    <Underline size={16} />
                  </Toggle>
                </div>
              </div>
              
              <div>
                <Label>حجم الخط</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Slider
                    value={[(activeElement.props?.styles?.fontSize || 16)]}
                    min={10}
                    max={48}
                    step={1}
                    onValueChange={(value) => updateElementStyle('fontSize', value[0])}
                  />
                  <span className="w-14 text-center">
                    {activeElement.props?.styles?.fontSize || 16}px
                  </span>
                </div>
              </div>
              
              <div>
                <Label>لون النص</Label>
                <div className="grid grid-cols-8 gap-2 mt-2">
                  {['#000000', '#ffffff', '#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0', '#607d8b'].map(color => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full border ${activeElement.props?.styles?.color === color ? 'ring-2 ring-primary' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => updateElementStyle('color', color)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-4">
          <div>
            <Label>الهوامش (بكسل)</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <Label className="text-xs">أعلى</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.marginTop || 0}
                  onChange={(e) => updateElementStyle('marginTop', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">أسفل</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.marginBottom || 0}
                  onChange={(e) => updateElementStyle('marginBottom', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">يمين</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.marginRight || 0}
                  onChange={(e) => updateElementStyle('marginRight', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">يسار</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.marginLeft || 0}
                  onChange={(e) => updateElementStyle('marginLeft', Number(e.target.value))}
                  className="h-8"
                />
              </div>
            </div>
          </div>
          
          <div>
            <Label>الحشو الداخلي (بكسل)</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <Label className="text-xs">أعلى</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.paddingTop || 0}
                  onChange={(e) => updateElementStyle('paddingTop', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">أسفل</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.paddingBottom || 0}
                  onChange={(e) => updateElementStyle('paddingBottom', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">يمين</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.paddingRight || 0}
                  onChange={(e) => updateElementStyle('paddingRight', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">يسار</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={activeElement.props?.styles?.paddingLeft || 0}
                  onChange={(e) => updateElementStyle('paddingLeft', Number(e.target.value))}
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <div>
            <Label>لون الخلفية</Label>
            <div className="grid grid-cols-8 gap-2 mt-2">
              {['transparent', '#ffffff', '#f5f5f5', '#e0e0e0', '#f44336', '#2196f3', '#4caf50', '#ff9800'].map(color => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border ${color === 'transparent' ? 'bg-transparent' : ''} ${activeElement.props?.styles?.backgroundColor === color ? 'ring-2 ring-primary' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => updateElementStyle('backgroundColor', color)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label>الحدود</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <Label className="text-xs">العرض</Label>
                <Input
                  type="number"
                  min="0"
                  max="10"
                  value={activeElement.props?.styles?.borderWidth || 0}
                  onChange={(e) => updateElementStyle('borderWidth', Number(e.target.value))}
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">النمط</Label>
                <Select
                  value={activeElement.props?.styles?.borderStyle || 'solid'}
                  onValueChange={(value) => updateElementStyle('borderStyle', value)}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solid">مصمت</SelectItem>
                    <SelectItem value="dashed">متقطع</SelectItem>
                    <SelectItem value="dotted">منقط</SelectItem>
                    <SelectItem value="none">بدون</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label className="text-xs">لون الحدود</Label>
                <div className="grid grid-cols-8 gap-1 mt-1">
                  {['#000000', '#cccccc', '#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0', '#607d8b'].map(color => (
                    <button
                      key={color}
                      className={`w-5 h-5 rounded-full border ${activeElement.props?.styles?.borderColor === color ? 'ring-1 ring-primary' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => updateElementStyle('borderColor', color)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Label>الزوايا المستديرة</Label>
            <div className="flex items-center gap-2 mt-2">
              <Slider
                value={[(activeElement.props?.styles?.borderRadius || 0)]}
                min={0}
                max={50}
                step={1}
                onValueChange={(value) => updateElementStyle('borderRadius', value[0])}
              />
              <span className="w-14 text-center">
                {activeElement.props?.styles?.borderRadius || 0}px
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StylesEditor;
