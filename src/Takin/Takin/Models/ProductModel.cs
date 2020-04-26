using System.Collections.Generic;
using System.Linq;
using takin.Entities;

namespace takin.Models
{
    public class ProductModel
    {
        private List<Product> Products;
        
        public ProductModel()
        {
            Products = new List<Product>()
            {
                new Product
                {

                    ID = "1",
                    Name = "Chancellor's Club",
                    Price =  4.25,
                    Description = "Smoked Turkey, baked Ham, Monterey Jack, Lettuce, Tomato, Bacon and chipotle Ranch on a Hoagie"
                 },
                new Product
                {

                    ID = "2",
                    Name = "Gus' Italian Sensation",
                    Price =  4,
                    Description = "Salami Pepperoni, Baked Ham, Provolone Cheese, Lettuce, Tomato and Banana peprs with Italian Dressing on a Hoagie"
                 },
                new Product
                {

                    ID = "3",
                    Name = "Grenadier Deluxe",
                    Price =  4,
                    Description = "SE Deli Signature sandwich"
                 },
                new Product
                {

                    ID = "4",
                    Name = "Southeast Supreme",
                    Price =  4,
                    Description = "Baked Ham, Roast Beef, pepper Jack Cheese, Bacon, Lettuce, Tomato, Banana Peppers and Ranch Dressing on a Hoagie"
                 },

            };
        }
        public List<Product> findAll() 
        {
            return Products;
        }

        public Product find(string id)
        {
            return Products.Where(p => p.ID == id).FirstOrDefault();
        }
    }
}
