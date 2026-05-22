import type { ProductImage } from '../../data/products';
import { cn } from '../../utils/cn';

type GradientProductImageProps = {
  image: ProductImage;
  className?: string;
};

export default function GradientProductImage({ image, className }: GradientProductImageProps) {
  return (
    <div
      className={cn(
        'relative flex aspect-square overflow-hidden rounded-[1.75rem] bg-gradient-to-br p-5 shadow-inner',
        image.gradient,
        className,
      )}
    >
      <div className="absolute left-5 top-5 flex gap-2">
        <span className={cn('h-4 w-4 rounded-full', image.accent)} />
        <span className="h-4 w-4 rounded-full bg-white/70" />
        <span className="h-4 w-4 rounded-full bg-stone-900/10" />
      </div>
      <div className="m-auto grid h-2/3 w-2/3 place-items-center rounded-[1.4rem] bg-white/65 text-center shadow-soft backdrop-blur">
        <div>
          <div className="text-5xl font-black text-stone-900">{image.emoji}</div>
          <div className="mt-3 text-sm font-bold text-stone-600">{image.label}</div>
        </div>
      </div>
    </div>
  );
}
