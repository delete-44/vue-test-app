class FilmsController < ApplicationController
  before_action :fetch_film, except: :index

  def index
    @films = Film.all.order(:id)
  end

  def update
    if @film.update(film_params)
      head :ok
    else
      render json: {
        error: @film.errors.full_messages.first
      }, status: :forbidden
    end
  end

  private

  def fetch_film
    @film = Film.find(params[:id])
  end

  def film_params
    params.require(:film).permit(:id, :title, :description)
  end
end
