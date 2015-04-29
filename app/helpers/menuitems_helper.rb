module MenuitemsHelper
  def catcount_to_cat(catcount)
    hash = { 1 => "Extras", 2 => "Entrees", 3 => "Specials", 4 => "Desserts", 5 => "Drinks" }
    hash[catcount]
  end
end