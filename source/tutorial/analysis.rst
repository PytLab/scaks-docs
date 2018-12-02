Define your own on-the-fly analysis plugin
------------------------------------------

For more flexible analysis the iteration process, SCAKS provides a
plugin mechanism that allow users to be able to define their own plugins
and register them to the model. With this, we can output or dump any
data before, during or after the Newton iteration.

It’s pretty easy for you to define your own plugin. Here we write a
on-the-fly analysis plugin to dump the errors during the Newton
iteration for visualization or other purpose.

1. create a ’MicroKinetcModel\ ``name``\ model\` as we described in
   other tutorial

2. Inherit the ``scaks.plugins.analysis.OnTheFlyAnalysis`` class to
   define custom analysis class

.. code:: python

   from scaks.plugins.analysis import OnTheFlyAnalysis

   @model.analysis_register
   class DumpTrajectory(OnTheFlyAnalysis):
       interval = 1

       def setup(self, model, outer_counter):
           self.errors = []

       def register_step(self, model, inner_counter, outer_coutner):
           self.errors.append(float(model.solver.error))

       def finalize(self, model, outer_counter):
           with open('newton_traj.py', 'w') as f:
               content = 'errors = {}\n'.format(self.errors)
               f.write(content)
           model.logger.info('Dump newton iteration trajectory to newton_traj.py')

3. Just run the model, your analysis methods in plugin will be invoked
   automatically. Enjoy it!
