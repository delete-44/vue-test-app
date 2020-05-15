class Film < ApplicationRecord
  validates :title, length: { in: 2..20 }, presence: true
  validates :description, length: { in: 5..100 }, presence: true
end
