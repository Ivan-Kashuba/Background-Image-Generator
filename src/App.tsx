import { Button } from "@/shared/ui";
import {
  AvatarBackgroundSidebar,
  BackgroundProvider,
  useBackground,
} from "@/features/avatar-background";

const AppContent = () => {
  const { toggleSidebar } = useBackground();

  const handleToggleSidebar = () => {
    toggleSidebar(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <Button
        onClick={handleToggleSidebar}
        variant="secondary"
        className="rounded-full bg-white shadow-lg transition-transform hover:scale-105"
      >
        Open sidebar
      </Button>

      <AvatarBackgroundSidebar />
    </div>
  );
};

const App = () => {
  return (
    <BackgroundProvider>
      <AppContent />
    </BackgroundProvider>
  );
};

export default App;
