# Generated by Django 4.0.3 on 2022-07-28 00:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0004_remove_shoe_bin_shoe_shoe_bin'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shoe',
            old_name='shoe_bin',
            new_name='bin',
        ),
    ]