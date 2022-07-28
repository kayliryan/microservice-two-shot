# Generated by Django 4.0.3 on 2022-07-27 22:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='binvo',
            name='import_href',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='bin',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bin', to='shoes_rest.binvo'),
        ),
    ]