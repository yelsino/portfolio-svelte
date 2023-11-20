// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from '@supabase/supabase-js'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<any>
      getSession(): Promise<Session | null>
		}
		// interface PageData {
		// añadí	session: Session | null
			
		// }
		// interface Platform {}
	}
}

export {};
