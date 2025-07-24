import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https:/rjefpqqyxxbmnmwntmom.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZWZwcXF5eHhibW5td250bW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTU3MjgsImV4cCI6MjA2ODY3MTcyOH0.5TwptcTkGpsu_BKgArqYH89EYz9MM6Hy1nW93uLGXo4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);