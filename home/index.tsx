import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SignOutButton } from '../../components/signoutButton'

export default function Page() {
  const { user } = useUser()

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="./sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="./sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}
