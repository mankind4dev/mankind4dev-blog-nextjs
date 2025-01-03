import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center text-center py-4">
      <SignIn />
    </div>
  );
}
