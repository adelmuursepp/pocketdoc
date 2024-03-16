from flask import Blueprint

recommended_actions_route = Blueprint('recommended_actions_route', __name__)

@recommended_actions_route.route('/recommended-actions')
def get_recommended_actions():
    return "Recommended actions"