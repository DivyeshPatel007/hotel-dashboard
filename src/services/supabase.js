import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eyxvfnybmiomjrgzpijx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eHZmbnlibWlvbWpyZ3pwaWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MDA2NjMsImV4cCI6MjAwODE3NjY2M30.K3TrxDuWTqDHhGfzcnoMU8JyeMIEfx1yFSpodzODOjA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase