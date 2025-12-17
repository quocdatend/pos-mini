using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_pos_mini.Migrations
{
    /// <inheritdoc />
    public partial class adddataproduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Image", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "/banh-socola.png", "Bánh Socola", 17000f },
                    { 2, "/banh-bao.png", "Bánh Bao", 8000f },
                    { 3, "/banh-ngot.png", "Bánh Ngọt", 12000f }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
