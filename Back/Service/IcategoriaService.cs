using DTO;

namespace Services
{
    public interface ICategoriaService
    {
        Task<IEnumerable<CategoriaDTO>> ObtenerCategoriasAsync();
    }
}
