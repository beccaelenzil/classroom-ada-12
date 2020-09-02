menu = {
  breakfast:  
  [
    {
      name: 'pancakes',
      price: 6.75,
      allergens: ['nuts']
    },
    {
      name: 'omlette',
      price: 10.00,
      allergens: ['eggs', 'dairy']
    },
    {
      name: 'chocolate pie',
      price: 8.50,
      allergens: []
    }
  ], 

lunch:  
  [
    {
      name: 'beet salad',
      price: 6.75,
      allergens: ['nuts']
    },
    {
      name: 'quiche',
      price: 10.00,
      allergens: ['gluten', 'dairy']
    },
    {
      name: 'molten chocolate cake',
      price: 8.50,
      allergens: []
    }
  ]
}

# courses = []
# menu.each do |course, meals|
#   courses << course
# end

# puts courses

prices = []
menu.each do |course, meals|
  meals.each do |meal|
    prices << meal[:price]
  end
end

p prices
puts prices
