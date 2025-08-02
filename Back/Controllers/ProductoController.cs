using DTO;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductosController : ControllerBase
    {
        private readonly IProductoService _productoService;

        public ProductosController(IProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var productos = await _productoService.ObtenerProductosAsync();
            return Ok(productos);
        }

        [HttpGet("categoria/{id}")]
        public async Task<IActionResult> GetPorCategoria(int id)
        {
            var productos = await _productoService.ObtenerPorCategoriaAsync(id);

            if (productos == null || !productos.Any())
            {
                return NotFound();
            }

            return Ok(productos);
        }


    }

}
