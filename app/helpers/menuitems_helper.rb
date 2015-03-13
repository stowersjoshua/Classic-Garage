module MenuitemsHelper
  def catcount_to_cat(catcount)
    hash = { 1 => "Entrees", 2 => "Sides", 3 => "Desserts", 4 => "Appetizers", 5 => "Other" }
    hash[catcount]
  end
end
