using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace be_pos_mini.Migrations
{
    /// <inheritdoc />
    public partial class updateorder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Oders",
                table: "Oders");

            migrationBuilder.RenameTable(
                name: "Oders",
                newName: "Orders");

            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Orders",
                newName: "CreatedAt");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Orders",
                table: "Orders",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Orders",
                table: "Orders");

            migrationBuilder.RenameTable(
                name: "Orders",
                newName: "Oders");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Oders",
                newName: "DateTime");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Oders",
                table: "Oders",
                column: "Id");
        }
    }
}
