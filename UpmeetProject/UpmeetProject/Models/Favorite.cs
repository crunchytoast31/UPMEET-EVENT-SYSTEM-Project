using System;
using System.Collections.Generic;

namespace UpmeetProject.Models;

public partial class Favorite
{
    public int? Id { get; set; }

    public int? EventsId { get; set; }

    public virtual Event? Events { get; set; }
}
