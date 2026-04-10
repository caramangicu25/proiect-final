using Microsoft.AspNetCore.Mvc.Filters;

namespace BidZone.WebApi.Filters;

// Use this attribute on controller actions to restrict access by role.
// Example: [AuthorizeRoles(UserRole.Admin, UserRole.Seller)]
// TODO: implement role-based authorization logic here
public class AuthorizeRolesAttribute : ActionFilterAttribute
{
    public AuthorizeRolesAttribute(params object[] roles) { }

    public override void OnActionExecuting(ActionExecutingContext context)
    {
        // TODO: check context.HttpContext.User for required roles
        base.OnActionExecuting(context);
    }
}
