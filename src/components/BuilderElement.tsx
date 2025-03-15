
import React from 'react';
import { BuilderElement as ElementType } from '@/context/BuilderContext';
import { cn } from '@/lib/utils';

interface BuilderElementProps {
  element: ElementType;
}

const BuilderElement: React.FC<BuilderElementProps> = ({ element }) => {
  const renderElement = () => {
    switch (element.type) {
      case 'heading':
        const HeadingTag = (element.props?.level || 'h2') as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag 
            className={cn(
              "font-bold", 
              element.props?.alignment === 'center' && "text-center",
              element.props?.alignment === 'right' && "text-right"
            )}
          >
            {element.content}
          </HeadingTag>
        );
        
      case 'paragraph':
        return (
          <p className={cn(
            "text-gray-700",
            element.props?.alignment === 'center' && "text-center",
            element.props?.alignment === 'right' && "text-right",
            element.props?.alignment === 'justify' && "text-justify"
          )}>
            {element.content}
          </p>
        );
        
      case 'button':
        return (
          <button 
            className={cn(
              "px-4 py-2 rounded font-medium",
              element.props?.variant === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90",
              element.props?.variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/90",
              element.props?.variant === 'outline' && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              element.props?.variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground",
              element.props?.size === 'sm' && "text-sm py-1",
              element.props?.size === 'lg' && "text-lg py-3"
            )}
          >
            {element.content}
          </button>
        );
        
      case 'image':
        return (
          <img 
            src={element.props?.src || '/placeholder.svg'} 
            alt={element.props?.alt || 'صورة'} 
            className="max-w-full h-auto"
          />
        );
        
      case 'spacer':
        return (
          <div style={{ height: `${element.props?.height || 32}px` }} />
        );
        
      case 'divider':
        return (
          <hr className={cn(
            element.props?.lineStyle === 'dashed' && "border-dashed",
            element.props?.lineStyle === 'dotted' && "border-dotted"
          )} style={{ 
            borderTopWidth: `${element.props?.thickness || 1}px` 
          }} />
        );
        
      case 'container':
        return (
          <div className="p-4 border rounded-md">
            <p className="text-center text-muted-foreground">حاوية</p>
          </div>
        );
        
      case 'hero':
        return (
          <div className="py-12 px-6 bg-muted/30 text-center space-y-4 rounded-md">
            <h2 className="text-3xl font-bold">عنوان القسم الرئيسي</h2>
            <p className="max-w-2xl mx-auto">وصف القسم الرئيسي الخاص بك. أضف هنا المزيد من المعلومات.</p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded">زر الدعوة للعمل</button>
          </div>
        );
        
      case 'features':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border rounded-md text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">{i}</span>
                </div>
                <h3 className="font-bold mb-2">ميزة {i}</h3>
                <p className="text-sm text-muted-foreground">وصف الميزة</p>
              </div>
            ))}
          </div>
        );
        
      case 'testimonial':
        return (
          <div className="p-6 bg-muted/20 rounded-md text-center">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4"></div>
            <p className="italic mb-4">"شهادة العميل هنا. كلمات إيجابية حول المنتج أو الخدمة."</p>
            <p className="font-bold">- اسم العميل</p>
            <p className="text-sm text-muted-foreground">المسمى الوظيفي، الشركة</p>
          </div>
        );
        
      case 'cta':
        return (
          <div className="py-10 px-6 bg-primary/10 rounded-md text-center space-y-4">
            <h3 className="text-2xl font-bold">دعوة للعمل</h3>
            <p>أضف هنا رسالة مقنعة لدعوة المستخدمين للقيام بإجراء.</p>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md">اتصل بنا</button>
          </div>
        );
        
      default:
        return <div>عنصر غير معروف</div>;
    }
  };

  return (
    <div className="builder-element">
      {renderElement()}
    </div>
  );
};

export default BuilderElement;
