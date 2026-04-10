namespace BidZone.WebApi.Middleware;

// Place JWT token validation logic here.
// Check the Authorization header, validate the token, and set HttpContext.User.
// Call next(context) to pass to the next middleware if valid.
public class AuthMiddleware
{
    private readonly RequestDelegate _next;

    public AuthMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // TODO: validate token here

        await _next(context);
    }
}
