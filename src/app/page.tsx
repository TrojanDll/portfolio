import Container from "@/components/ui/Container/Container";
import ProfileSidebar from "@/components/widgets/ProfileSidebar/ProfileSidebar";
import WelcomeScreen from "@/components/widgets/WelcomeScreen/WelcomeScreen";

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
