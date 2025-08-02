namespace DTO
{
    public class ProductoDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public decimal Precio { get; set; }
        public int Inventario { get; set; }
        public string Categoria { get; set; } = string.Empty;
    }
}
