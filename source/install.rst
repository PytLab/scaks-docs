Installation
============

*MiKiAC* Installation
---------------------

MiKiAC can be installed in different ways. In current version, MiKiAC
has no C or C++ backend code, therefore it can be easily installed even
from source code.

Prerequisite
~~~~~~~~~~~~

As MiKiAC provides a higher level Message Passing Interfaces, you need
to install an implementation of MPI on your machine before installing
mpi4py.

MPI implementations: - `MPICH <https://www.mpich.org/>`__ -
`OpenMPI <https://www.open-mpi.org/>`__ - `Microsoft
MPI <https://docs.microsoft.com/en-us/message-passing-interface/microsoft-mpi>`__

Via Pip (Recommended)
~~~~~~~~~~~~~~~~~~~~~

.. code:: shell

   pip install mikiac

From source
~~~~~~~~~~~

.. code:: shell

   git clone --recursive https://github.com/PytLab/mikiac.git
   cd mikiac
   python setup.py install

Installation check
~~~~~~~~~~~~~~~~~~

To ensure you have installed correctly on your machine, try to import
``mikiac`` in Python shell:

.. code:: python

   >>> import mikiac

For developers
^^^^^^^^^^^^^^

We also provide unit tests for developers, if you have clone the
repository, just

.. code:: shell

   cd mikiac/tests
   python mikiac_test.py

MiKiAC-Hub Installation
-----------------------

Install and run MiKiAC-Hub example locally
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Clone the repository:

.. code:: shell

   git clone --recursive git@github.com:PytLab/mikiac-hub.git

Run the mikiac-hub:

.. code:: shell

   cd mikiac-hub/example
   ../mikiac-hub runserver

Your browser will open automatically, if not, open your browser and
visit http://localhost:5000

|image0|

.. |image0| image:: ./_static/hub-screenshot.png

