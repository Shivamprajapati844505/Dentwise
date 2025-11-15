import Image from "next/image";
import {Button} from "@/components/ui/button";
 import {SignUpButton,SignOutButton,  SignedOut, SignedIn} from '@clerk/nextjs'
export default function Home() {
  return <div>
    <h1>GOme page</h1>
    <SignedOut>
    <SignUpButton mode= "modal">Sing up</SignUpButton>
    </SignedOut>
    
    <SignedIn>
      <SignOutButton>Logout</SignOutButton>
    </SignedIn>
  </div>
  
}
