import { Carousel } from "@mantine/carousel";
import { ModuleProgress } from "@/lib/data";
import ModuleCard from "./ModuleCard";

type UserCarouselProps = {
  progress: ModuleProgress;
};

const UserCarousel = ({ progress }: UserCarouselProps) => {
  return (
    <Carousel
      orientation="vertical"
      withControls={true}
      height={350}
      slideSize={{ base: "50%", tablet: "33%", md: "33.333333%" }}
      slideGap="md"
      align={"start"}
      loop
    >
      {Object.entries(progress).map(([module, submodule]) => {
        return (
          <Carousel.Slide>
            <ModuleCard moduleTitle={module} submodule={submodule} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default UserCarousel;
