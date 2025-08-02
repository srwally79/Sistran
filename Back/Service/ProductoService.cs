using Microsoft.EntityFrameworkCore;
using DAL;
using DTO;

namespace Services
{
    public class ProductoService : IProductoService
    {
        private readonly AppDbContext _context;

        public ProductoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerProductosAsync()
        {
            return await _context.Productos
                .Include(p => p.Categoria)
                .Select(p => new ProductoDTO
                {
                    Id = p.Id,
                    Nombre = p.Nombre,
                    Precio = p.Precio,
                    Inventario = p.Inventario, // <-- agregado
                    Categoria = p.Categoria != null ? p.Categoria.Nombre : ""
                })
                .ToListAsync();
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerPorCategoriaAsync(int categoriaId)
        {
            return await _context.Productos
                .Where(p => p.CategoriaId == categoriaId)
                .Select(p => new ProductoDTO
                {
                    Id = p.Id,
                    Nombre = p.Nombre,
                    Precio = p.Precio,
                    Inventario = p.Inventario
                })
                .ToListAsync();
        }


    }
}
