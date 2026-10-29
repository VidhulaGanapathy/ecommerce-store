from django.urls import path
from django.contrib.auth import views as auth_views    # Django's built-in login/logout views
from . import views                                    # import our views.py

urlpatterns = [
    path('', views.home, name='home'),                                       # homepage
    path('product/<int:product_id>/', views.product_detail, name='product_detail'),
    # <int:product_id> captures a number from the URL and passes it to the view

    path('cart/', views.cart, name='cart'),
    path('cart/add/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('cart/remove/<int:product_id>/', views.remove_from_cart, name='remove_from_cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('orders/', views.my_orders, name='my_orders'),

    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='store/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]