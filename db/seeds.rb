(0..9).each do |i|
  Film.create(title: "Film-#{i}", description: "This is film #{i}")
end
