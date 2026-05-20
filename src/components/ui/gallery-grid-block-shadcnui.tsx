import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X, ZoomIn } from "lucide-react";
import { KeyboardEvent, useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    title: "Cozinha Contemporânea",
    category: "Cozinha",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    title: "Cozinha em L Branca",
    category: "Cozinha",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    title: "Cozinha com Ilha",
    category: "Cozinha",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    title: "Quarto Master",
    category: "Quarto",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    title: "Quarto Planejado Casal",
    category: "Quarto",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    title: "Closet Feminino",
    category: "Quarto",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    title: "Sala de Estar",
    category: "Sala",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80",
    title: "Sala com Painel de TV",
    category: "Sala",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    title: "Sala Integrada",
    category: "Sala",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    title: "Home Office Moderno",
    category: "Escritório",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Escritório Corporativo",
    category: "Escritório",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    title: "Banheiro com Gabinete",
    category: "Banheiro",
  },
];

export function GalleryGridBlock() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

  const filteredImages =
    filter === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, imageId: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  return (
    <section
      className="w-full bg-background px-4 py-16"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4" variant="secondary">
            <Grid className="mr-1 h-3 w-3" />
            Portfólio
          </Badge>
          <h2
            id="gallery-heading"
            className="mb-4 text-4xl font-bold tracking-tight"
          >
            Nossos Projetos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Cada foto é um projeto real entregue. Clique para ver em detalhe.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Categorias"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="rounded-full"
              aria-pressed={filter === category}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Galeria de projetos"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="listitem"
              >
                <Card
                  className="group relative cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-xl"
                  onClick={() => setSelectedImage(image.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver projeto: ${image.title}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      <ZoomIn className="mb-2 h-8 w-8 text-white" />
                      <h3 className="mb-2 text-center text-lg font-semibold text-white">
                        {image.title}
                      </h3>
                      <Badge variant="secondary">{image.category}</Badge>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                {/* Close */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -right-12 top-0 text-white hover:bg-white/10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Fechar"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Prev */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                {/* Next */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  aria-label="Próximo"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <motion.img
                  key={selectedImage}
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  className="max-h-[80vh] w-auto rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-center"
                >
                  <h3
                    className="mb-2 text-xl font-semibold text-white"
                    id="gallery-dialog-title"
                  >
                    {selectedImageData.title}
                  </h3>
                  <Badge variant="secondary">{selectedImageData.category}</Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
