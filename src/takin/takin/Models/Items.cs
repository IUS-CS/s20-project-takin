using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace takin.Models
{
    [Table("Items")]

    public class Items
    {
        [Key]
        public string ID { get; set; }
        
        public string Name { get; set; }
        
        public decimal Price { get; set; }
        
        public int Quantity { get; set; }
        
        public string Description { get; set; }
        
        public bool status { get; set; }
        
            


    }
}