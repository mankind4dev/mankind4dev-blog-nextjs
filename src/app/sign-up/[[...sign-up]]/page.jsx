import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center text-center py-4">
      <SignUp />
    </div>
  );
}
