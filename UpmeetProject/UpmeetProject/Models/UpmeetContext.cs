using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace UpmeetProject.Models;

public partial class UpmeetContext : DbContext
{
    public UpmeetContext()
    {
    }

    public UpmeetContext(DbContextOptions<UpmeetContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Upmeet;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Events__3213E83F1B70D07E");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(350);
            entity.Property(e => e.Location).HasMaxLength(50);
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3213E83F5A0F7672");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EventsId).HasColumnName("EventsID");

            entity.HasOne(d => d.Events).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.EventsId)
                .HasConstraintName("FK__Favorites__Event__3A81B327");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
