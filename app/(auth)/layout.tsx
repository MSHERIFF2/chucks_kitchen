// app/(auth)/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {children} {/* This renders signIn/page.tsx or signUp/page.tsx */}
    </div>
  );
}
