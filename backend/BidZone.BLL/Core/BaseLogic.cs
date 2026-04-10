namespace BidZone.BLL.Core;

public abstract class BaseLogic<T>
{
    public abstract IEnumerable<T> GetAll();
    public abstract T? GetById(int id);
}
