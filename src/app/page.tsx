import Container from "@/shared/ui/Container/Container";
import { ProfileSidebar } from "@/widgets/profile-sidebar";
import { WelcomeScreen } from "@/widgets/welcome-screen";

export default function Home() {
  return (
    <div>
      main
      <WelcomeScreen />
      <Container>
        <ProfileSidebar />
      </Container>
    </div>
  );
}
