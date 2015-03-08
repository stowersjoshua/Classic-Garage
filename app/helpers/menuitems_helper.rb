module MenuitemsHelper
  def catcount_to_cat(catcount)
    hash = { 1 => "Entre", 2 => "Side", 3 => "Dessert", 4 => "Appetizer", 5 => "Other" }
    hash[catcount]
  end
end
