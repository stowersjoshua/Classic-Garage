module MenuitemsHelper
  def catcount_to_cat(catcount)
    hash = { 1 => "Entree", 2 => "Side", 3 => "Dessert", 4 => "Appetizer", 5 => "Other" }
    hash[catcount]
  end
end
