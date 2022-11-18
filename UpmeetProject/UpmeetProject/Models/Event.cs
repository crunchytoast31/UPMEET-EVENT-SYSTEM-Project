using System;
using System.Collections.Generic;

namespace UpmeetProject.Models;

public partial class Event
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public DateTime? DateTime { get; set; }

    public string? Location { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Favorite> Favorites { get; } = new List<Favorite>();
}
