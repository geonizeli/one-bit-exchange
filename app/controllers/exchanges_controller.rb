class ExchangesController < ApplicationController
  before_action :set_history, only: [:index]
  def index; end

  def convert
    value = ExchangeService.new(params[:source_currency], params[:target_currency], params[:amount]).perform
    render json: { "value": value }
  end

  private

  def set_history
    @history = History.all
  end
end
