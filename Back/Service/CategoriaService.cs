using Microsoft.EntityFrameworkCore;
using DAL;
using DTO;

namespace Services
{
    public class CategoriaService : ICategoriaService
    {
        private readonly AppDbContext _context;

        public CategoriaService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CategoriaDTO>> ObtenerCategoriasAsync()
        {
            return await _context.Categorias
                .Select(c => new CategoriaDTO { Id = c.Id, Nombre = c.Nombre })
                .ToListAsync();
        }
    }
}
