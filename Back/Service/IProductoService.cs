using DTO;

namespace Services
{
    public interface IProductoService
    {
        Task<IEnumerable<ProductoDTO>> ObtenerProductosAsync();
        Task<IEnumerable<ProductoDTO>> ObtenerPorCategoriaAsync(int categoriaId);

    }
}
