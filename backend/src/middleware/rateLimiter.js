import rateLimit from "../config/upstash.js"


// try to implement authentication and add rate limit to per user, or we can limit based on ip address too 
// so instead of, 'my-rate-limit' you will have userid

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit('my-limit-key')
    if(!success) return res.status(429).json({'message': "Too many requests, try again later"})
    next();
  } catch (error) {
    console.log("Rate limit error", error)
    next(error)
  }
}

export default rateLimiter;