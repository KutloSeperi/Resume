# Kutlo Seperi Portfolio

## Run locally

1. Add your key to `.env.local`:
   ```text
   OPENROUTER_API_KEY=your_key_here
   UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
   ```
   The live production chat API uses Upstash Redis to enforce a limit of 10 messages per IP address per UTC day. Local development is unrestricted. Create a Redis database in Upstash and add its REST URL and token to your production deployment's environment variables.
2. In a Bash terminal, from the project folder, run:
   ```bash
   set -a
   source .env.local
   set +a
   npx vercel dev --listen 4173 --local
   ```
3. Open http://localhost:4173/.
