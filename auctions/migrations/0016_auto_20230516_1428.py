# Generated by Django 3.2.18 on 2023-05-16 14:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0015_remove_listing_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='Auction_closed',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='Highest_Bid',
        ),
    ]